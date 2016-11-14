import {Injectable} from "@angular/core";
import {Store, Action} from "@ngrx/store";
import {StateUpdates, Effect} from "@ngrx/effects";
import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    SELECT_REDDIT
} from "../reducers/reddit";

