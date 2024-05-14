import { Container, Grid, Header, Segment } from "semantic-ui-react"

export const NewReleases = () => {

    return(
        <>
            <Segment vertical>
                <Container>
                    <Grid textAlign="center">
                        <Grid.Row>
                            <Grid.Column>
                                <Header as='h1' content='New Releases' />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={4}>1</Grid.Column>
                            <Grid.Column width={4}>2</Grid.Column>
                            <Grid.Column width={4}>3</Grid.Column>
                            <Grid.Column width={4}>4</Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </>
    )
}