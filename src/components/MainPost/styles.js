import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(5),
    marginTop: theme.spacing(6),
  },
}));
