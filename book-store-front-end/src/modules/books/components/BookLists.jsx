import React, { PureComponent } from "react";
import {
  Table,
  Loader,
  Label,
  Header,
  Dimmer,
  Icon,
  Modal,
  Button
} from "semantic-ui-react";
import TableHeader from "../../baseComponent/components/TableHeader";
import moment from "moment";
import { withRouter } from "react-router-dom";
//header table
const getHeader = () => {
  return [
    { content: "Book Title" },
    { content: "Genre" },
    { content: "Author" },
    { content: "Book introduction", width: 5 },
    { content: "Created at" },
    { content: "Updated at" },
    { content: "Action" }
  ];
};

const ConFirmModal = ({ open, onClose, handleDelete }) => {
  return (
    <Modal size="mini" open={open} onClose={onClose}>
      <Modal.Header>Delete Book</Modal.Header>
      <Modal.Content>
        <p>Are you sure you want to delete this book</p>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={onClose}>
          No
        </Button>
        <Button
          positive
          icon="checkmark"
          labelPosition="right"
          content="Yes"
          onClick={handleDelete}
        />
      </Modal.Actions>
    </Modal>
  );
};
//Page title
const PageTitle = () => (
  <Header
    as="h3"
    icon="book"
    content="  Book lists"
    style={{ marginBottom: "20px", marginTop: "5px" }}
  />
);
const NoData = () => {
  return (
    <Table.Row>
      <Table.Cell colSpan={16} style={{ textAlign: "center" }}>
        <Label color="green">This table is empty</Label>
      </Table.Cell>
    </Table.Row>
  );
};

const TableRow = ({ rowData, handleOpenConfirmModal, edit }) => {
  const {
    title,
    genre,
    author,
    bookIntroduction,
    createdAt,
    updatedAt,
    _id
  } = rowData;
  return (
    <Table.Row>
      <Table.Cell>{title}</Table.Cell>
      <Table.Cell>{genre}</Table.Cell>
      <Table.Cell>{author}</Table.Cell>
      <Table.Cell>
        {bookIntroduction || (
          <center>
            <Label color="red" size="small">
              null
            </Label>
          </center>
        )}
      </Table.Cell>
      <Table.Cell>
        {moment(createdAt).format("DD/MM/YYYY, h:mm:ss a")}
      </Table.Cell>
      <Table.Cell>
        {moment(updatedAt).format("DD/MM/YYYY, h:mm:ss a")}
      </Table.Cell>
      <Table.Cell>
        <Icon
          name="edit"
          title="Edit"
          style={{ cursor: "pointer" }}
          color="blue"
          onClick={edit.bind(this, _id)}
        />

        <Icon
          name="trash alternate"
          title="Delete"
          style={{ cursor: "pointer" }}
          color="red"
          onClick={handleOpenConfirmModal.bind(this, _id)}
        />
      </Table.Cell>
    </Table.Row>
  );
};

const TableBody = ({ data, isFetching, edit, handleOpenConfirmModal }) => {
  return (
    <Table.Body>
      {data.length === 0 && <NoData />}
      {isFetching && <TableFetching />}
      {data.map((dataItem, index) => {
        return (
          <TableRow
            rowData={dataItem}
            key={`UserReferrerTableBody_${index}`}
            edit={edit}
            handleOpenConfirmModal={handleOpenConfirmModal}
          />
        );
      })}
    </Table.Body>
  );
};

const TableFetching = () => {
  return (
    <Table.Row>
      <Table.Cell colSpan={16} style={{ textAlign: "center" }}>
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      </Table.Cell>
    </Table.Row>
  );
};
class BookLists extends PureComponent {
  state = {
    isOpenModal: false
  };
  componentDidMount() {
    this.props.fetchBooks();
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.books !== prevProps.books &&
      this.props.isFetching === false
    ) {
      this.props.fetchBooks();
    }
  }
  edit = id => {
    this.props.history.push(`book-form/${id}`);
  };
  handleOpenConfirmModal = id => {
    this.setState({ isOpenModal: true, deleteId: id });
  };
  handleCloseConfirmModal = () => {
    this.setState({ isOpenModal: false });
  };
  handleDelete = () => {
    this.setState({ isOpenModal: false });
    this.props.handleDelete(this.state.deleteId);
  };
  render() {
    const headerData = getHeader();
    const { books } = this.props;
    const { isFetching, data } = books;
    const { isOpenModal } = this.state;
    return (
      <div>
        <PageTitle />
        <Table celled color="teal" striped selectable>
          <TableHeader headerData={headerData} />
          <TableBody
            data={data ? data : []}
            isFetching={isFetching}
            edit={this.edit}
            handleOpenConfirmModal={this.handleOpenConfirmModal}
          />
          {/* <TableFooter
      key="pagination"
      activePage={page ? page : 1}
      min={1}
      max={pages ? pages : 1}
      total={total ? total : 0}
      limit={limit ? limit : 0}
      handlePageChange={handlePageChange}
      handleInputPaginateChange={handleInputPaginateChange}
      totalCell={headerData.length}
    /> */}
        </Table>
        {isOpenModal && (
          <ConFirmModal
            open={isOpenModal}
            onClose={this.handleCloseConfirmModal}
            handleDelete={this.handleDelete}
          />
        )}
      </div>
    );
  }
}

export default withRouter(BookLists);
