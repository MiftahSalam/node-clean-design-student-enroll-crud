module.exports = (StudentRepository) => {
    async function Execute() {
        return StudentRepository.getAll()
    }

    return {
        Execute
    }
}