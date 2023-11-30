import React from 'react';
import css from '@styles/common.module.scss';

export default function () {
    return (
        <div className={css.welcome}>
            <h3>Welcome to Theology 101!</h3>
            <p>Begin by browsing to a Topic or Tag</p>
        </div>
    );
}
