SELECT users.first_name, users.last_name, users.email, users.dob, state.name as "state" FROM users
join state
on users.state_id = state.id;