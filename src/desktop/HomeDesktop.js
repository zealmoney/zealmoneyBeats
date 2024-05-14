import { Container, Grid, Segment } from "semantic-ui-react"
import { HeadingPage } from "../common/HeadingPage"
import { NewReleases } from "../common/NewReleases"
import { NavbarDesktop } from "./NavbarDesktop"
import { CarouselComponent } from "../common/CarouselComponent"

export const HomeDesktop = () => {
    return(
        <Segment vertical style={{backgroundColor: 'beige', marginTop: '0em', paddingTop: '0em'}}>
            <NavbarDesktop />
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <HeadingPage />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <NewReleases />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}