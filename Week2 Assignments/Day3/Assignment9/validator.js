// TODO: Export these validation functions
// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
    return typeof title === 'string' && title.length >= 3;
}

// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
    const validPriorities = ['low', 'medium', 'high'];
    return validPriorities.includes(priority);
}
                      
// 3. Validate due date (must be future date)
function validateDueDate(date) {
    if(date>'25-02'){
        return true
    }
    return 'Due Date is not valid'
    }
export {validateDueDate,validatePriority,validateTitle}
