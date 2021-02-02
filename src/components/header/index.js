import {
    AppBar,
    Toolbar,
    makeStyles,
    Typography
} from '@material-ui/core';

const headerStyleMobile = makeStyles(theme => ({
    root: {
        [theme.breakpoints.down("sm")]: {
            display: "block",
            textAlign: "center",
            width: "100%"
        }
    }
}));

const headerBar = () => {
    const headerStyleMob = headerStyleMobile()
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography
                    variant="h5"
                    classes={headerStyleMob}
                >
                    TinyList
            </Typography>
            </Toolbar>
        </AppBar>
    )
}
export default headerBar;