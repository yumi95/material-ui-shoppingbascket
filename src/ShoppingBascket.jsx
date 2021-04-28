import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ShoppingCard from './ShoppingCard';
import ShoppingList from './ShoppingContent';

const useStyles = makeStyles((theme) => ({
    root : {
        padding: theme.spacing(3, 2),
    },
    window: {
        width: '100%',
        padding: '5px',
    },
    windowDummy: {
        height: '5px'
    },
    flex : {
        display: 'flex',
        padding: '2px',
        alignItems: 'center',
        justifyContent : 'center'
    }
}));

export default function ShoppingBascket(){

    const getShoppingList = (ShoppingListObj) => {
        return (
        <List>
        <ShoppingCard { ...ShoppingListObj } />
        </List>
        );
    }

    const classes = useStyles();

    return (
        <div>
        <Grid item container > 
        <Grid item xs={1} sm={2}/> 
        <Grid item xs={10} sm={8} justify="center" >
        <Typography variant="h4" align="left" style={{padding:'20px'}}>
        Vision Markets
        {/* 버튼형식으로 만들어서 메인 페이지로 바로 가게 기능 변경해야함 */}
        </Typography>
        <Card className={classes.root}>
        <ShoppingCartIcon fontSize="Large"/>
            <hr />
        <div className={classes.flex}>
            <div className={classes.window}>
                {ShoppingList.map(ShoppingListObj => getShoppingList(ShoppingListObj))}
        </div>
        </div>
        <hr />
        <div className={classes.flex} style={{fontSize:'0.9rem'}}>
        상품가격 45000원 + 배송비 0원 = 총 주문금액 45000원
        </div>
        <hr />
        <div className={classes.flex}>
        <Button variant="contained" color="primary">
        장바구니비우기
        </Button>
        <Grid item xs={1} />
        <Button variant="contained" color="primary">
        구매하기
        </Button>
        </div>
        </Card>
        </Grid>
        <Grid item xs={1} sm={2}/>
        </Grid>  
        </div>
    );
}
