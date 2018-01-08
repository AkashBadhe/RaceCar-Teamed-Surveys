import * as React from 'react';
import { TestDrive, IState, Question } from '../model';
import SurveyForm from './SurveyForm';
import { Button } from 'react-bootstrap';
import {
    model,
    saveQuestion,
    editQuestion,
    deleteQuestion,
    updateQuestion
} from '../../test_drive';

interface SurveysProps {
    questions: Question[];
    newQuestion: Question;
    addQquestion: () => any;
    deleteQuestion: (id: number) => any;
    saveQuestion: (question: Question) => any;
    editQuestion: (question: Question) => any;
    onChange: (event: any, question: Question) => any;
    saveTestDrive: (testDrive: TestDrive) => any;
    testDrive: TestDrive;
    updateUI: (any) => any;
    ui: any;
};

class Surveys extends React.Component<SurveysProps> {
    constructor(props, context) {
        super(props, context);
        //  this.handleEdit = this.handleEdit.bind(this);
    }

    render() {
        const { 
            testDrive,
            questions,
            saveQuestion,
            editQuestion,
            onChange,
            newQuestion,
            deleteQuestion,
            addQquestion,
            saveTestDrive,
            ui,
            updateUI
        } = this.props;
        return (
            <div className="test-case-container col-xs-12">
                <div className="col-md-12">
                    {
                        questions && questions.map(question => {
                            return <SurveyForm
                                question={(question && question.isInEditMode) ? 
                                    { ...newQuestion, isInEditMode: true } : question}
                                saveQuestion={saveQuestion}
                                editQuestion={editQuestion}
                                deleteQuestion={deleteQuestion}
                                onChange={onChange}
                                updateUI={updateUI}
                                ui={ui}
                            />
                        })
                    }
                </div>
                <div className="col-md-2 add_test pull-right text-right">
                    <a href="#" onClick={addQquestion}> + add Question </a>
                </div>
                <div className="col-md-12">

                    <input type="button" value="Next" className="button type1 nextBtn btn-lg pull-right" />
                    <input type="button" value="Save" className="button type1 nextBtn btn-lg pull-right"
                        onClick={() => { saveTestDrive(testDrive) }} />
                </div>
            </div>
        );
    }
}

export default Surveys;