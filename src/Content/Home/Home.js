import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    Grid,
    Column,
    Link
} from '@carbon/react';
import FileUploader from '../../Components/FileUploader'

const Home = () => {
    return (
        <Grid className="landing-page" fullWidth>
            <Column lg={16} md={8} sm={4} className="landing-page__banner">
                <Breadcrumb noTrailingSlash aria-label="Page navigation">
                    <BreadcrumbItem>
                        <Link to="/">Getting started</Link>
                    </BreadcrumbItem>
                </Breadcrumb>
                <h1 className="landing-page__heading">Talk &amp; Play with PDF</h1>
                <Grid className="tabs-group-content">
                    <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
                        <p className="landing-page__p">
                            This application allows users to upload PDF files and communicate with
                            the content within the PDFs through a chat interface.
                            Users can ask questions, request summaries, or query specific information from the uploaded PDFs.
                        </p>
                    </Column>
                </Grid>
            </Column>
            <Column lg={16} md={8} sm={4} className="landing-page__r2">
                <FileUploader />
            </Column>
            <Column lg={16} md={8} sm={4} className="landing-page__r3">
                <Grid>
                    <Column md={4} lg={4} sm={4}>
                        <h3 className="landing-page__label">The Principles</h3>
                    </Column>
                    <Column md={4} lg={4} sm={4}>
                        Carbon is Open
                    </Column>
                    <Column md={4} lg={4} sm={4}>
                        Carbon is Modular
                    </Column>
                    <Column md={4} lg={4} sm={4}>
                        Carbon is Consistent
                    </Column>
                </Grid>
            </Column>
        </Grid>
    )
};

export default Home;