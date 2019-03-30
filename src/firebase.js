import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyCInF-GAmHJLuixQedH_fM1rwCy8LhagNA",
    authDomain: "mcity-2e98d.firebaseapp.com",
    databaseURL: "https://mcity-2e98d.firebaseio.com",
    projectId: "mcity-2e98d",
    storageBucket: "mcity-2e98d.appspot.com",
    messagingSenderId: "551820941073"
  };;

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers,
    firebaseDB
}
