import { createAction } from 'redux-actions';

import { TestDrive, TestCase, Question } from './model';
import TestDriveApi from './api/mockApi';

import {
  ADD_TestDrive,
  DELETE_TestDrive,
  EDIT_TestDrive,
  UPDATE_TestDrive,
  SAVE_TestDrive,
  SUBMIT_TestDrive,
  ADD_TestCase,
  DELETE_TestCase,
  EDIT_TestCase,
  SAVE_TestCase,
  SUBMIT_TestCase,
  ADDQuestion,
  DELETEQuestion,
  EDITQuestion,
  SAVEQuestion,
  SUBMITQuestion,
  UPDATE_TestCase,
  SWITCH_Tab
} from './constants/ActionTypes';

//  const addTestDrive = createAction<TestDrive, TestDrive>(
//   ADD_TestDrive,
//   (testDrive: TestDrive) => {
//     return testDrive;
//   }
//  );
//  const deleteTestDrive = createAction<TestDrive, TestDrive>();
//  const editTestDrive = createAction<TestDrive, TestDrive>();
const saveTestDrive = createAction<any, TestDrive>(
  SAVE_TestDrive,
  (testDrive: TestDrive) => TestDriveApi.saveTestDrives(testDrive)
);

const submitTestDrive = createAction<any, TestDrive>(
  SUBMIT_TestDrive,
  (testDrive: TestDrive) => TestDriveApi.submitTestDrive(testDrive)
);

const editTestDrive = createAction<TestDrive, TestDrive>(
  EDIT_TestDrive,
  (testDrive: TestDrive) => {
    return testDrive;
  }
);

const updateTestDrive = createAction<TestDrive, any, TestDrive>(
  UPDATE_TestDrive,
  (e: any, testDrive: TestDrive) => {
    if (e.target.type && e.target.type.toLowerCase() === "select-multiple") {
      let list = e.target.selectedOptions;
      let selectedItems = [];
      for(let i =0; i< list.length; i++){
        selectedItems.push(list[i].value);
      }

      testDrive[e.target.name] = selectedItems;
    } else {
      testDrive[e.target.name] = e.target.value;
    }
    return testDrive;
  }
);

const updateMultiSelect = createAction<any, any, TestDrive>(
  UPDATE_TestDrive,
  (value: any, testDrive: TestDrive) => {
      if(value[0].hasOwnProperty('function') === true){
        testDrive['function'] = value;
      }else if(value[0].hasOwnProperty('location') === true){
        testDrive['location'] = value;
      }else if(value[0].hasOwnProperty('device') === true){
        testDrive['requiredDevices'] = value;
      }else if(value[0].hasOwnProperty('os') === true){
        testDrive['requiredOs'] = value;
      }
      return testDrive;
  }
)

const deleteTestDrive = createAction<number, number>(
  DELETE_TestDrive,
  (id: number) => {
    return id;
  }
);

const editTestCase = createAction<TestCase, TestCase>(
  EDIT_TestCase,
  (testCase: TestCase) => {
    return testCase;
  }
)

const saveTestCase = createAction<TestCase, TestCase>(
  SAVE_TestCase,
  (testCase:TestCase) => {
    return testCase
  }
)

const deleteTestCase = createAction<number, number>(
  DELETE_TestCase,
  (id: number)=>{
    return id;
  }
)

const updateTestCase = createAction<TestCase, any, TestCase>(
  UPDATE_TestCase,
  (e: any, testCase: TestCase) => {
    if (e.target.type && e.target.type.toLowerCase() === "select-multiple") {
      let list = e.target.selectedOptions;
      let selectedItems = [];
      for(let i =0; i< list.length; i++){
        selectedItems.push(list[i].value);
      }

      testCase[e.target.name] = selectedItems;
    } else {
      testCase[e.target.name] = e.target.value;
    }
    return testCase;
  }
)

const switchTab = createAction<string, string>(
  SWITCH_Tab,
  (key: string)=>{
    return key;
  }
)

export {

  deleteTestDrive,
  editTestDrive,
  saveTestDrive,
  submitTestDrive,
  updateTestDrive,
  editTestCase,
  deleteTestCase,
  saveTestCase,
  updateTestCase,
  switchTab,
  updateMultiSelect
}
