import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Zoom, useScrollTrigger } from "@mui/material";

const ScrollToTop = () => {
    return (
        <Zoom in={useScrollTrigger({ threshold: 100 })}>
            <Fab
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
                
                size="small"
                sx={{ position: "fixed", bottom: 33, right: 33 }}
                color="primary"
                aria-label="add"
            >
                <KeyboardArrowUp fontSize="small" />
            </Fab>
        </Zoom>
    )
}

export default ScrollToTop
