import { gql } from "@apollo/client";

export const GET_COURSE_INFO = gql`
  {
    courseInfo {
      courseId
      courseDesc
      courseShortDesc
      courseLength
    }
  }
`;

export const GET_CONTENT_DESCRIPTION_MASTER = gql`
  {
    contentDescriptionMaster {
      cdmId
      cconDescTitle
      cconDescSubTitle
    }
  }
`;

export const GET_CONTENT_DESCRIPTION_DETAIL = gql`
  {
    contentDescriptionDetail {
      id
      contentsBody
    }
  }
`;

export const GET_CONTENT_MCQ_MASTER = gql`
  {
    contentMcqMaster {
      id
      cdmId {
        cdmId
        cconDescTitle
        cconDescSubTitle
      }
      mcqQuestion
      mcqQMulti
    }
  }
`;

export const GET_CONTENT_MCQ_DETAIL = gql`
  {
    contentMcqDetail {
      id
      mcqId {
        cdmId {
          courseId
          cconDescTitle
          cconDescSubTitle
          courseSlno
          contentType
        }
        mcqQuestion
        mcqQMulti
      }
      mcqChoice
      mcqChoiceSlno
      mcqChoiceType
      mcqQImageUrl
    }
  }
`;

export const GET_TABLE_COL_INFO = gql`
  {
    tableColInfo {
      tableColId
      columnName
      colDataType
      colDesc
      colClassi
    }
  }
`;

export const GET_TABLE_DATA_INFO = gql`
  {
    userTableDataInfo(tableId: 6, tableColId: 2) {
      tableId
      tableColId
      tableRefId
      tabRelId
      columnData
      columnName
    }
  }
`;

export const GET_TABLE_DATA = gql`
  query getTableDataInfo($tableId: Int, $tableColId: Int, $columnData: String) {
    getTableDataInfo(
      tableId: $tableId
      colId: $tableColId
      columnData: $columnData
    ) {
      tableDataId
      tableId
      tableColId
      columnData
      tabRelId
    }
  }
`;

export const GET_TABLE_MASTER_DETIAL_DATA = gql`
  {
    tableDataMd(tableId: tableId, colId: colId, columnData: columnData) {
      columnData
      tableColId
      tableId
      tabRelId
      tableRefId
    }
  }
`;

export const TABLE_DATA_DETAIL = gql`
  query getTableDataRelIdInfo(
    $tableId: Int
    $tableColId: Int
    $tabRelId: String
  ) {
    getTableDataRelIdInfo(
      tableId: $tableId
      tableColId: $tableColId
      tabRelId: $tabRelId
    ) {
      tableDataId
      columnData
      tableColId
      tableId
      tabRelId
      tableRefId
      colDataType
      userId
    }
  }
`;

export const TABLE_DATA_BOX_DETAIL = gql`
  query getTableDataRefIdInfo(
    $tableId: Int
    $tableColId: Int
    $tableRefId: String
  ) {
    getTableDataRefIdInfo(
      tableId: $tableId
      tableColId: $tableColId
      tableRefId: $tableRefId
    ) {
      columnData
      tableColId
      tableId
      tabRelId
      tableRefId
      userId
    }
  }
`;

export const TABLE_DATA_BOX_DETAIL_REF = gql`
  query getTableDataRefIdInfo(
    $tableId: Int
    $tableColId: Int
    $tableRefId: String
  ) {
    getTableDataRefIdInfo(
      tableId: $tableId
      tableColId: $tableColId
      tableRefId: $tableRefId
    ) {
      tableColId
      columnData
      tableDataId
      tabRelId
      tableRefId
      userId
    }
  }
`;

export const TABLE_ADMIN_DATA = gql`
  query qGetTableDataInfo($Qselect: String!, $Qfrom: String!, $Qwhere: String) {
    qGetTableDataInfo(Qselect: $Qselect, Qfrom: $Qfrom, Qwhere: $Qwhere) {
      itemData
    }
  }
`;

export const TABLE_DATA_DETAIL_TEST = gql`
  query getTableDataRelIdInfo(
    $tableId: Int
    $tableColId: Int
    $tabRelId: String
  ) {
    getTableDataRelIdInfo(
      tableId: $tableId
      tableColId: $tableColId
      tabRelId: $tabRelId
    ) {
      tableDataId
      columnData
      tableColId
      tableId
      tabRelId
      tableRefId
      colDataType
    }
  }
`;

export const TABLE_DATA_SEARCH_QUERY = gql`
  query getSearchQuery($search: String) {
    getSearchQuery(search: $search) {
      mcqData
    }
  }
`;

export const GET_ALL_TABLE_DATA_QUERY = gql`
  query getDynamicTableField($tableId: Int) {
    getDynamicTableField(tableId: $tableId) {
      jsonData
    }
  }
`;

export const GET_ALL_TABLE_COLUMN = gql`
  query getAllTableColumn {
    getAllTableColumn {
      jsonData
    }
  }
`;
