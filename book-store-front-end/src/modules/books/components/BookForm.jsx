import React, { PureComponent } from "react";
import {
  Button,
  Form,
  Header,
  Icon,
  Container,
  Label,
  Modal
} from "semantic-ui-react";

const vRequired = "required";
const titleType = {
  value: "",
  hasError: false,
  error: [],
  isRequired: true,
  validate: [vRequired],
  name: "title",
  label: "Title",
  placeholder: "Title of book"
};

const authorType = {
  value: "",
  hasError: false,
  error: [],
  isRequired: true,
  validate: [vRequired],
  name: "author",
  label: "Author",
  placeholder: "Author"
};
const genreType = {
  value: "",
  hasError: false,
  error: [],
  isRequired: true,
  validate: [vRequired],
  name: "genre",
  label: "Genger",
  placeholder: "Genger"
};

const bookIntroductionType = {
  value: "",
  hasError: false,
  error: [],
  isRequired: false,
  validate: [],
  name: "bookIntroduction",
  label: "Book Introduction",
  placeholder: "Book Introduction"
};
const IntitialState = {
  title: titleType,
  genre: genreType,
  error: {},
  author: authorType,
  bookIntroduction: bookIntroductionType,
  modal: {
    isOpen: false,
    modalHeader: "",
    modalContent: "",
    modalClass: "green"
  }
};
const ResultModal = ({ size, open, close, header, content, color }) => {
  return (
    <Modal size={size} open={open} onClose={close}>
      <Label as="a" color={color} ribbon>
        {header}
      </Label>
      <Modal.Content>
        <center>
          <h3>{content}</h3>
        </center>
      </Modal.Content>
    </Modal>
  );
};

const ContactHeader = ({ id }) => (
  <Header as="h3" style={{ marginBottom: "20px", marginTop: "5px" }}>
    <Icon name="mail" />
    <Header.Content>{id ? `Edit Book ${id}` : "Create Book"}</Header.Content>
  </Header>
);

class BookForm extends PureComponent {
  state = { ...IntitialState };
  componentDidMount() {
    const { params } = this.props.match;
    if (params.id) {
      this.props.fetchBook(params.id);
    }
  }
  componentDidUpdate(prevProps) {
    const { data } = this.props.book;
    if (prevProps.book.data !== data) {
      this.setState(prevState => ({
        title: {
          ...prevState.title,
          value: data.title
        },
        genre: {
          ...prevState.genre,
          value: data.genre
        },
        author: {
          ...prevState.author,
          value: data.author
        },
        bookIntroduction: {
          ...prevState.bookIntroduction,
          value: data.bookIntroduction
        }
      }));
    }
  }

  _handleChange = (e, { name, value }) => {
    this.setState(prevState => ({
      [name]: { ...prevState[name], hasError: false, error: [], value: value }
    }));
  };

  _handleReset = () => {
    this.setState({
      ...IntitialState
    });
  };
  validate = (typeValid, value) => {
    switch (typeValid) {
      case vRequired:
        return value.trim() ? false : "This Field has been required";

      default:
        return false;
    }
  };
  _handleValidate = fields => {
    let hasError = false;
    const result = fields.map((item, index) => {
      const { validate, name } = item;
      if (!validate) return { isError: false, fieldName: name };

      let isError = false;
      const fieldValid = validate.map(typeValid => {
        const itemValidate = this.validate(typeValid, item.value);
        if (itemValidate !== false) {
          isError = true;
          hasError = true;
        }
        return itemValidate;
      });
      if (isError) {
        const error = fieldValid.filter(item => item !== false);
        return { isError, error, fieldName: name };
      } else return { isError: false, fieldName: name };
    });
    return { hasError, result };
  };

  _handleSubmit = () => {
    const { title, genre, bookIntroduction, author } = this.state;
    const { params } = this.props.match;
    const validate = this._handleValidate([
      title,
      genre,
      bookIntroduction,
      author
    ]);
    if (validate.hasError) {
      validate.result.forEach(item => {
        if (item.isError) {
          this.setState(prevState => ({
            ...prevState,
            [item.fieldName]: {
              ...prevState[item.fieldName],
              hasError: true,
              error: item.error
            }
          }));
        }
      });
      return;
    }
    const data = {
      title: title.value,
      genre: genre.value,
      author: author.value,
      bookIntroduction: bookIntroduction.value
    };
    params.id
      ? this.props.editBook(data, params.id)
      : this.props.createBook(data);
  };
  render() {
    const { book, match } = this.props;
    const { params } = match;
    const { title, genre, bookIntroduction, author } = this.state;
    const { isFetching, modal } = book;
    return (
      <Container>
        <ContactHeader id={params.id || ""} />
        <Form error loading={isFetching}>
          <Form.Input
            fluid
            label={title.label}
            placeholder={title.placeholder}
            name={title.name}
            value={title.value}
            error={title.hasError}
            onChange={this._handleChange}
            required={title.isRequired}
          />
          {title.hasError && (
            <Label basic color="red" pointing>
              {title.error[0]}
            </Label>
          )}
          <Form.Input
            fluid
            label={genre.label}
            placeholder={genre.placeholder}
            error={genre.hasError}
            name={genre.name}
            value={genre.value}
            required={genre.isRequired}
            onChange={this._handleChange}
          />
          {genre.hasError && (
            <Label basic color="red" pointing>
              {genre.error[0]}
            </Label>
          )}
          <Form.Input
            fluid
            label={author.label}
            placeholder={author.placeholder}
            error={author.hasError}
            name={author.name}
            value={author.value}
            required={author.isRequired}
            onChange={this._handleChange}
          />
          {author.hasError && (
            <Label basic color="red" pointing>
              {author.error[0]}
            </Label>
          )}
          <Form.TextArea
            label={bookIntroduction.label}
            placeholder={bookIntroduction.placeholder}
            error={bookIntroduction.hasError}
            required={bookIntroduction.isRequired}
            onChange={this._handleChange}
            value={bookIntroduction.value}
            name={bookIntroduction.name}
          />
          {bookIntroduction.hasError && (
            <Label basic color="red" pointing>
              {bookIntroduction.error[0]}
            </Label>
          )}
          <br />
          <Button type="submit" onClick={this._handleSubmit}>
            Submit
          </Button>
        </Form>
        <ResultModal
          open={modal.isOpen}
          size="small"
          header={modal.modalHeader}
          content={modal.modalContent}
          color={modal.modalClass}
          close={this.props.closeResultModal}
        />
      </Container>
    );
  }
}

export default BookForm;
