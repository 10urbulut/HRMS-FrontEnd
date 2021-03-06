import { Formik } from 'formik'
import React from 'react'
import { Button, Form, Grid, GridColumn, Header, Divider, Segment, FormButton, GridRow } from 'semantic-ui-react'
import * as Yup from 'yup';
import HRMSTextInput from '../Utilities/CustomFormControls/HRMSTextInput';
import ResumeService from '../services/resumeService'

export default function ResumeForm() {
    let resumeService = new ResumeService()

    const initialValues = {
        gitHubLink: "",
        linkedinLink: "",
        coverLetter: ""
    }
    const validationSchema = Yup.object({
        gitHubLink: Yup.string(),
        linkedinLink: Yup.string(),
        coverLetter: Yup.string(),
    })


    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values)

                }}
            >
                {({ handleSubmit }) => (

                    <Form onSubmit={handleSubmit} className="ui form">
                        <Header as='h3' disabled dividing>
                            .... Ekleme
                        </Header>
                        <Segment padded >
                            <Grid>
                                <GridRow>
                                    <GridColumn width={4}>


                                    </GridColumn>
                                    <GridColumn width={8}>
                                        <HRMSTextInput name="gitHubLink" placeholder="GitHub linkinizi yazınız"></HRMSTextInput>
                                        <HRMSTextInput name="linkedinLink" placeholder="Linkedin linkinizi yazınız"></HRMSTextInput>
                                        <HRMSTextInput name="coverLetter" placeholder="Kapak yazınızı giriniz"></HRMSTextInput>
                                    </GridColumn>
                                </GridRow>
                            </Grid>
                            <Divider ></Divider>
                            <Button type="submit" color="olive" circular> Ekle </Button>

                        </Segment>
                    </Form>
                )}
            </Formik >
            <Header as='h6' icon disabled dividing>
                HRMS
            </Header>
        </div>
    )
}