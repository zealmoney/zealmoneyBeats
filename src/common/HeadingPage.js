import { Container, Grid, Segment } from "semantic-ui-react"
import { CarouselComponent } from "./CarouselComponent"

export const HeadingPage = () => {

    return(
        <>
            <Segment vertical style={{padding: '2em 0em'}}>
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column style={{minHeight: 250}}>
                                <Segment vertical>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <CarouselComponent />
                                            </Grid.Column>
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