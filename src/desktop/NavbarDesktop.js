import { useNavigate } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Container, Icon, Menu, Segment } from 'semantic-ui-react'

export const NavbarDesktop = () => {

    const navigate = useNavigate()

    return(
        <Segment vertical style={{backgroundColor: 'black', marginTop: '0em'}}>
            <Menu
                secondary
                size='large'
            >
                <Container>
                    <Menu.Item
                        as='a'
                        style={{color: '#fff'}}
                        onClick={() => navigate("/")}
                    >
                        ZEALMONEY ON THE BEATS
                    </Menu.Item>
                    <Menu.Item
                        position='right'
                        as='a' style={{color: '#fff'}}
                    >
                        Beats
                    </Menu.Item>
                    <Menu.Item
                        as='a' style={{color: '#fff'}}
                    >
                        News
                    </Menu.Item>
                    <Menu.Item
                        as='a' style={{color: '#fff'}}
                    >
                        <Icon name=' sign in alternate' />
                        Login
                    </Menu.Item>
                    <Menu.Item
                        as='a' style={{color: '#fff'}}
                    >
                        <Icon name='cart' />
                    </Menu.Item>
                </Container>
            </Menu>
        </Segment>
    )
}