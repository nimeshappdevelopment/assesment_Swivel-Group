import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
                display: 'flex',
                flexWrap: 'wrap',
                '& > *': {
                margin: theme.spacing(1),
                width: theme.spacing(100),
                    height: theme.spacing(25),
              padding:"1rem"
            },
    },
    paddingTop: {
        paddingTop: "5rem"
    }
}));