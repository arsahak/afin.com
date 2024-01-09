import { gql } from "@apollo/client";

export const CREATE_COURSE_MUTATION = gql`
  mutation CreateCourse(
    $course_desc: String!
    $course_short_desc: String!
    $course_length: Float!
    $ccon_desc_title: String!
    $ccon_desc_sub_title: String!
    $contents_body: [ContentBodyInput]
    $mcq_question: String!
    $mcq_q_multi: Boolean!
    $mcq_detail: [McqDetailInput]
  ) {
    createCourse(
      courseDesc: $course_desc
      courseShortDesc: $course_short_desc
      courseLength: $course_length
      cconDescTitle: $ccon_desc_title
      cconDescSubTitle: $ccon_desc_sub_title
      contentsBody: $contents_body
      mcqQuestion: $mcq_question
      mcqQMulti: $mcq_q_multi
      mcqDetail: $mcq_detail
    ) {
      courseInfo {
        courseId
        courseDesc
        courseLength
        courseShortDesc
      }
      contentDescriptionMaster {
        cdmId
        cconDescTitle
        cconDescSubTitle
      }
      contentDescriptionDetail {
        id
        contentsBody
      }
      contentMcqMaster {
        mcqQuestion
        mcqQMulti
        cdmId {
          cconDescTitle
          cconDescSubTitle
        }
      }
      contentMcqDetail {
        id
        mcqChoice
        mcqChoiceSlno
      }
    }
  }
`;

export const CREATE_COURSE_INFO_MUTATION = gql`
  mutation createCourseInfo(
    $courseDesc: String!
    $courseShortDesc: String!
    $courseLength: String!
  ) {
    createCourseInfo(
      courseDesc: $courseDesc
      courseShortDesc: $courseShortDesc
      courseLength: $courseLength
    ) {
      courseInfo {
        courseId
        courseDesc
        courseLength
        courseShortDesc
      }
    }
  }
`;

export const CREATE_COURSE_MASTER_MUTATION = gql`
  mutation createCourseMaster(
    $courseDesc: String!
    $courseShortDesc: String!
    $courseLength: String!
    $cconDescTitle: String!
    $cconDescSubTitle: String!
    $mcqQuestion: String!
    $mcqQMulti: Boolean!
  ) {
    createCourseMaster(
      courseDesc: $courseDesc
      courseShortDesc: $courseShortDesc
      courseLength: $courseLength
      cconDescTitle: $cconDescTitle
      cconDescSubTitle: $cconDescSubTitle
      mcqQuestion: $mcqQuestion
      mcqQMulti: $mcqQMulti
    ) {
      courseInfo {
        courseId
        courseDesc
        courseLength
        courseShortDesc
      }
      contentDescriptionMaster {
        cconDescTitle
        cconDescSubTitle
      }
      contentMcqMaster {
        mcqQuestion
        mcqQMulti
      }
    }
  }
`;

export const CREATE_TABLE_DATA_INFO_MUTATION = gql`
  mutation createTableDataInfo(
    $tableId: Int!
    $tableColId: Int!
    $tabRelId: String!
    $columnData: String!
  ) {
    createTableDataInfo(
      tableId: $tableId
      tableColId: $tableColId
      tabRelId: $tabRelId
      columnData: $columnData
    ) {
      tableDataInfo {
        tableId
        tableColId
        tabRelId
        tableRefId
        columnData
        columnName
      }
    }
  }
`;

export const CREATE_TABLE_COL_INFO_MUTATION = gql`
  mutation createTableColInfo(
    $tableColId: Int!
    $columnName: String!
    $colDataType: String!
    $colDesc: String!
    $colClassi: String!
  ) {
    createTableColInfo(
      tableColId: $tableColId
      columnName: $columnName
      colDataType: $colDataType
      colDesc: $colDesc
      colClassi: $colClassi
    ) {
      TableColInfo {
        tableColId
        columnName
        colDesc
        colDataType
        colClassi
      }
    }
  }
`;

export const CREATE_EVENT_INVITATION_MUTATION = gql`
  mutation createEventInvitation(
    $eventTitle: String!
    $startDateAndTime: String!
    $bbt: String!
    $engagement: String!
    $hostedBy: String!
    $location: String!
    $hostPhoneNumber: String!
    $message: String!
    $extension: String!
    $eventUserId: String!
  ) {
    createEventInvitation(
      eventTitle: $eventTitle
      startDateAndTime: $startDateAndTime
      bbt: $bbt
      engagement: $engagement
      hostedBy: $hostedBy
      location: $location
      hostPhoneNumber: $hostPhoneNumber
      message: $message
      extension: $extension
      eventUserId: $eventUserId
    ) {
      eventTitle {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
      startDateAndTime {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
      bbt {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
      engagement {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
      hostedBy {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
      location {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
      hostPhoneNumber {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
      message {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
      eventImage {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
    }
  }
`;

export const ADD_CONTACT_MUTATION = gql`
  mutation addContact(
    $firstName: String!
    $lastName: String!
    $email: String!
    $zipcode: String!
    $phoneNumber: String!
    $eventContactUserId: String!
    $eventTitle: String!
  ) {
    addContact(
      email: $email
      firstName: $firstName
      lastName: $lastName
      zipcode: $zipcode
      phoneNumber: $phoneNumber
      eventContactUserId: $eventContactUserId
      eventTitle: $eventTitle
    ) {
      firstName {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
      lastName {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
      email {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
      zipcode {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
      phoneNumber {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
      eventFirstName {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
      eventLastName {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
      eventEmail {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
      eventZipcode {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
      eventPhoneNumber {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
      eventCheckBox {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
    }
  }
`;

export const CREATE_CRUD_INFO_MUTATION = gql`
  mutation createCrudInfo(
    $tableId: Int!
    $tableColId: Int!
    $tabRelId: String!
    $tableRefId: Int!
    $columnData: String!
    $columnName: String!
    $userId: String!
  ) {
    createCrudInfo(
      tableId: $tableId
      tableColId: $tableColId
      tabRelId: $tabRelId
      tableRefId: $tableRefId
      columnData: $columnData
      columnName: $columnName
      userId: $userId
    ) {
      tableDataInfo {
        tableDataId
        tableId
        tableColId
        tabRelId
        tableRefId
        columnData
        columnName
        userId
      }
    }
  }
`;

export const CREATE_SEND_MESSAGE_INFO_MUTATION = gql`
  mutation contactSendMessage(
    $eventMessageUserId: String!
    $message: String!
    $eventTitle: String!
    $startDateAndTime: String!
    $location: String!
    $hostedBy: String!
    $tabledataid: Int!
  ) {
    contactSendMessage(
      eventMessageUserId: $eventMessageUserId
      message: $message
      eventTitle: $eventTitle
      startDateAndTime: $startDateAndTime
      location: $location
      hostedBy: $hostedBy
      tabledataid: $tabledataid
    ) {
      message {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
      eventTitle {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
      dateTime {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
    }
  }
`;

export const TABLE_COLUMN_DATA_DELETE = gql`
  mutation columnDataDelete($id: Int!) {
    columnDataDelete(id: $id) {
      message
    }
  }
`;

export const TABLE_COLUMN_DATA_UPDATE = gql`
  mutation columnDataUpdate($id: Int!, $columnData: String!) {
    columnDataUpdate(id: $id, columnData: $columnData) {
      message
    }
  }
`;

export const ADMIN_TABLE_IMAGE_UPLOAD = gql`
  mutation imageUpload(
    $date: String!
    $extension: String!
    $name: String!
    $userId: String!
  ) {
    imageUpload(
      userId: $userId
      name: $name
      date: $date
      extension: $extension
    ) {
      adminFilesUrl {
        tableDataId
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
    }
  }
`;

export const APP_LOG_MUTATION = gql`
  mutation logMutationApp($logEvent: String!) {
    logMutationApp(logEvent: $logEvent) {
      result
    }
  }
`;

export const CREATE_USER_SIGN_UP1_MUTATION = gql`
  mutation userSignUp1(
    $email: String!
    $firstName: String!
    $lastName: String!
    $password: String!
  ) {
    userSignUp1(
      email: $email
      firstName: $firstName
      lastName: $lastName
      password: $password
    ) {
      userSignUpTableDataInfoEmail {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
        tableDataId
      }
      userSignUpTableDataInfoPassword {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
        tableDataId
      }
      firstNameData {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
        tableDataId
      }
      lastNameData {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
        tableDataId
      }
      roleData {
        tableId
        tableColId
        columnData
        columnName
        tableRefId
        userId
        tabRelId
        tableDataId
      }
      zipcodeData {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
        tableDataId
      }
      isEmailVerified {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
        tableDataId
      }
      isActive {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
        tableDataId
      }
      isSuperuser {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
        tableDataId
      }
      userId {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
        tableDataId
      }
      middleName {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
        tableDataId
      }
      dob {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
        tableDataId
      }
      gender {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
        tableDataId
      }
      phoneNumber {
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
        tableDataId
      }
    }
  }
`;

export const CREATE_USER_SIGN_IN_MUTATION = gql`
  mutation userSignIn($email: String!, $password: String!) {
    userSignIn(email: $email, password: $password) {
      result
    }
  }
`;

export const CREATE_USER_OTP_CHECK_MUTATION = gql`
  mutation userOtpCheck($email: String!, $userOtp: String!) {
    userOtpCheck(email: $email, userOtp: $userOtp) {
      result
    }
  }
`;

export const CREATE_USER_COURSE_MCQ_ANSWER = gql`
  mutation userCourseMcqAns(
    $chapterId: String!
    $courseId: String!
    $mcqOptionNo: String!
    $questionId: String!
    $result: String!
    $userId: String!
  ) {
    userCourseMcqAns(
      chapterId: $chapterId
      courseId: $courseId
      mcqOptionNo: $mcqOptionNo
      questionId: $questionId
      result: $result
      userId: $userId
    ) {
      courseId {
        tableDataId
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
      chapterId {
        tableDataId
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
      questionId {
        tableDataId
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
      mcqOptionNo {
        tableDataId
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
      result {
        tableDataId
        tableId
        tableColId
        columnData
        columnName
        userId
        tableRefId
        tabRelId
      }
    }
  }
`;

export const COURSE_MCQ_FINAL_RESULT_MUTATION = gql`
  mutation courseMcqFinalResult($courseId: String!, $userId: String!) {
    courseMcqFinalResult(courseId: $courseId, userId: $userId) {
      result
    }
  }
`;
export const CREATE_MULTIPLE_DYNAMIC_TABLE_DATA = gql`
  mutation createMultipleDynamicTableData($tableDataList: [TableDataInput]) {
    createMultipleDynamicTableData(tableDataList: $tableDataList) {
      tableDataInfoType {
        tableDataId
        tableId
        tableColId
        columnName
        columnData
        tableRefId
        tabRelId
        userId
      }
    }
  }
`;
