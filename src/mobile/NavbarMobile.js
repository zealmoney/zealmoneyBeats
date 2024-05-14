import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Header, Icon, Menu, Segment, Sidebar, SidebarPusher } from "semantic-ui-react"

export const NavbarMobile = () => {
    const [sidebarOpened, setSidebarOpened] = useState()
    const navigate = useNavigate()
    return(
        <>
            <Sidebar
                visible={sidebarOpened}
                as={Menu}
                animation="overlay"
                inverted
                vertical
                onHide={() => setSidebarOpened(false)}
                style={{backgroundColor: 'black'}}
            >
                <Menu.Item as='a' style={{color: '#fff'}}>
                    Beats
                </Menu.Item>
                <Menu.Item as='a' style={{color: '#fff'}}>
                    News
                </Menu.Item>
                <Menu.Item as='a' style={{color: '#fff'}}>
                    <span>
                        <Icon name="sign in alternate" />
                        Login
                    </span>
                </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
                <Segment vertical style={{backgroundColor: 'black'}}>
                    <Menu size="small" secondary>
                        <Container>
                            <Menu.Item as='a'>
                                <Header 
                                    style={{color: '#fff'}} 
                                    content='ZEALMONEY ON THE BEATS' 
                                />
                            </Menu.Item>
                            <Menu.Item 
                                style={{color: '#fff'}} 
                                position="right"
                                onClick={() => setSidebarOpened(true)}
                            >
                                <Icon size="big" name="sidebar" />     
                            </Menu.Item>
                        </Container>
                    </Menu>
                </Segment>
            </Sidebar.Pusher>
        </>
    )
}