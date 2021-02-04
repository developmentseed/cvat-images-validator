const drawerWidth = 240;
const headerHeigth = 50;

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexGrow: 1,
    background: 'rgb(250, 250, 250)',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    minHeight: 56,
    [theme.breakpoints.up('sm')]: {
      minHeight: headerHeigth,
    },
    background: '#ffc107',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    backgroundColor: '#f5f5f5',
  },
  container: {
    marginTop: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  circulasProgress: {
    display: 'block',
    margin: 'auto',
    marginTop: '20%',
    width: '100px',
  },
  table: {
    width: '100%',
  },
  tableCell: {
    paddingRight: 0,
    paddingLeft: 0,
  },
  formcontrol: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
  select: {
    minWidth: 80,
  },
});

export default styles;
