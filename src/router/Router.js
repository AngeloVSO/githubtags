import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage/LoginPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = '/'>
                    <LoginPage />
                </Route>

                <Route exact path = '/:user'>
                    <HomePage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router