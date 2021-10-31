import {INTERVAL_REGISTRATION_YEAR} from '../variables/variables';

export function getGroupsUsers(users) {
    const usersGroups = [];
    for (const user of users.results) {
        const currentGroup = Math.ceil(user.registered.age / INTERVAL_REGISTRATION_YEAR - 1)
        if (!usersGroups[currentGroup]) {
            usersGroups[currentGroup] = []
        }
        usersGroups[currentGroup].push(getCurrentFieldsUser(user))
    }

    return usersGroups
}

function getCurrentFieldsUser(user, currentGroup) {
    return ({
        'id': user.login.uuid,
        'full_name': (user.name.first + ' ' + user.name.last),
        'date': user.dob.date.split('T')[0].split('-').reverse().join("."),
        'email': user.email,
        'photo': user.picture.medium
    })
}