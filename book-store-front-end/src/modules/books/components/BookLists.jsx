import React, { PureComponent } from "react";
import { Table, Loader, Label, Header, Grid, Button } from "semantic-ui-react";
import TableHeader from "../../baseComponent/components/TableHeader";
//header table
const getHeader = () => {
  return [
    { content: "Name" },
    { content: "Email" },
    { content: "Message", width: 8 },
    { content: "Created at" }
  ];
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

const TableRow = ({ rowData, handleViewDetail }) => {
  const { name, email, message, createdAt } = rowData;
  return (
    <Table.Row>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{email}</Table.Cell>
      <Table.Cell>
        {/* {message.length > MaxMessageLength
            ? message.slice(0, MaxMessageLength) + "..."
            : message} */}
        {message}
      </Table.Cell>
      <Table.Cell>
        1{" "}
        {/* {moment(parseInt(createdAt, 10)).format("DD/MM/YYYY, h:mm:ss a")} */}
      </Table.Cell>
    </Table.Row>
  );
};

const TableBody = ({ data }) => {
  return (
    <Table.Body>
      {data.length === 0 && <NoData />}
      {data.map((dataItem, index) => {
        return (
          <TableRow rowData={dataItem} key={`UserReferrerTableBody_${index}`} />
        );
      })}
    </Table.Body>
  );
};

class BookLists extends PureComponent {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchBooks();
  }
  render() {
    const headerData = getHeader();

    return (
      <div>
        <PageTitle />
        <Table celled color="teal" striped selectable>
          <TableHeader headerData={headerData} />
          <TableBody data={[]} />
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
      </div>
    );
  }
}

export default BookLists;
