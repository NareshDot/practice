'use strict';

import * as express from 'express';
import * as passport from 'passport';
import * as auth from '../auth.service';
import { send_response } from '../../common/common'

var router = express.Router();

router.post('/', function (req, res, next) {
    
    passport.authenticate('local', function (err, user, info) {
        var error = err || info;
        if (error)
            return res.status(401).json(send_response(null, true, error.message));
        if (!user)
            return res.status(404).json(send_response(null, true, 'Something went wrong, please try again.'));

        var token = auth.signToken(user._id, user.role);
        var data = {user: user, token: token};
        res.json({data: data, is_error: false, message: ''});
    })(req, res, next)
});

module.exports = router;