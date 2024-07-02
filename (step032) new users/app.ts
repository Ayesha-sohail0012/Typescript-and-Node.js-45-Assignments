let current_users: string[] = ['aish','alaya','jennice','saim','kainat'];
let new_users: string[] = ['Saba']

new_users.forEach((new_users) => {
    
if(
    current_users.some(
        (current_users) => current_users === new_users.toLowerCase()
    )
){
    console.log(`${new_users} will need to enter new user name`)
}



else(
    console.log(`${new_users} is available`)
)

});