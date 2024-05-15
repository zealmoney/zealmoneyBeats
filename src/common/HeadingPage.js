import { Container, Grid, Segment } from "semantic-ui-react"
import { CarouselComponent } from "./CarouselComponent"

export const HeadingPage = () => {

    return(
        <>
            <Segment vertical style={{padding: '2em 0em'}}>
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment vertical>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={2}></Grid.Column>
                                            <Grid.Column width={12} textAlign="center">
                                                <CarouselComponent />
                                            </Grid.Column>
                                            <Grid.Column width={2}></Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </>
    )
}