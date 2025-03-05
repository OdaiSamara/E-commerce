import { AddShoppingCartOutlined } from '@mui/icons-material'
import { Box, Button, Stack, ToggleButtonGroup, Typography } from '@mui/material'
import React from 'react'

const ProductDetails = () => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 2.5,
                flexDirection: { xs: "column", sm: "row" },
            }}
        >
            <Box sx={{ display: "flex" }}>
                <img
                    width={360}
                    src="public\images\1.jpg"
                    alt=""
                />
            </Box>

            <Box sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
                <Typography variant="h5">
                    woman fashion
                </Typography>
                <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
                    200$
                </Typography>
                <Typography variant="body1">
                    this is perfect prodect red,blue,gray small medium larg QQ
                    this is perfect prodect red,blue,gray small medium larg QQ
                </Typography>

                <Stack
                    sx={{ justifyContent: { xs: "center", sm: "left" } }}
                    direction={"row"}
                    gap={1}
                    my={2}
                >
                    {["public/images/1.jpg", "public/images/2.jpg"].map((item) => {
                        return (
                            <img style={{ borderRadius: 3 }} width={90} height={100} key={item} src={item} alt="4*4" />
                        )
                    }
                    )}

                </Stack>

                <Button
                    sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
                    variant="contained"
                >
                    <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
                    Buy now
                </Button>
            </Box>
        </Box>


    )
}

export default ProductDetails
