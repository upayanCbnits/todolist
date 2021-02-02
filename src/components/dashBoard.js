import { Container, makeStyles, Backdrop, CircularProgress } from '@material-ui/core';
import TodoInput from './todoInput';
import TaskList from './todoList';
import { useSelector } from "react-redux";
import HeaderBar from './header';

const dashBoardStyles = makeStyles({
    root: {
        maxWidth: 540
    }
});
const DashBoard = (props) => {

    const dashBoard = dashBoardStyles()
    const loading = useSelector(state => state.loading)

    return (
        <div>
            <HeaderBar />
            <Container classes={dashBoard} m={10}>
                <TodoInput />
                <TaskList />
                {
                    loading &&
                    <Backdrop open={loading}>
                        <CircularProgress color="inherit" />
                    </Backdrop>
                }
            </Container>
        </div>

    )
}
export default DashBoard