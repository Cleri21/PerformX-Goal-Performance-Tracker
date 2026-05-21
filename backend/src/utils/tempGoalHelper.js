// Scratchpad for goal weightage and check-in helpers
const GOAL_STATUSES = ['draft', 'submitted', 'approved', 'rejected'];
function validateWeightage(goals) { return goals.reduce((sum, g) => sum + (g.weightage || 0), 0) === 100; }
function canManagerEdit(status) { return status === 'submitted'; }
const ROLES = { EMPLOYEE: 'employee', MANAGER: 'manager', ADMIN: 'admin' };
function formatQuarterLabel(q, year) { return Q-; }
function calculateCompletionScore(progress, weightage) { return (progress * weightage) / 100; }
const CHECKIN_FREQUENCIES = ['weekly', 'biweekly', 'quarterly'];
