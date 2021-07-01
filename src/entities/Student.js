module.exports = class Student {
    constructor(firstName, lastName, email, enrollment) {
        this.id = null
        this.firstName = firstName
        this.lastName = lastName
        this.fullname = `${firstName} ${lastName}`
        this.email = email
        this.enrollments = enrollment
    }
}