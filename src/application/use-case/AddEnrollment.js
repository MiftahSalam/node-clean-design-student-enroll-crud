/* eslint-disable arrow-body-style */
module.exports = (StudentRepository) => {
    const Execute = async (studentId, enrollment) => {
        const student = await StudentRepository.getById(studentId)

        // console.log("application-use-case-AddEnrollment-Execute student",student)
        // console.log("application-use-case-AddEnrollment-Execute enrollment",enrollment)
        if(!student || !enrollment) {
            throw new Error('validation failed')
        }
        if(student.enrollments && student.enrollments.some(e => e.course.id === enrollment.course.id)) {
            throw new Error('validation failed: user already registered to this course')
        }

        return StudentRepository.addEnrollment(studentId, enrollment)
    }

    return {
        Execute
    }
}