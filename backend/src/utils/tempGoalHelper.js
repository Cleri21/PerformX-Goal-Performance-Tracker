// Scratchpad for goal weightage and check-in helpers
const GOAL_STATUSES = ['draft', 'submitted', 'approved', 'rejected'];
function validateWeightage(goals) { return goals.reduce((sum, g) => sum + (g.weightage || 0), 0) === 100; }
function canManagerEdit(status) { return status === 'submitted'; }
const ROLES = { EMPLOYEE: 'employee', MANAGER: 'manager', ADMIN: 'admin' };
function formatQuarterLabel(q, year) { return Q-; }
function calculateCompletionScore(progress, weightage) { return (progress * weightage) / 100; }
const CHECKIN_FREQUENCIES = ['weekly', 'biweekly', 'quarterly'];
function isGoalLocked(goal) { return goal.status === 'approved' && !goal.unlockedByAdmin; }
function sanitizeAuditMeta(meta) { return JSON.parse(JSON.stringify(meta || {})); }
const DEFAULT_PAGE_LIMIT = 20;
function hasRoleAccess(userRole, allowedRoles) { return allowedRoles.includes(userRole); }
// Scratchpad for goal weightage and check-in helpers
const GOAL_STATUSES = ['draft', 'submitted', 'approved', 'rejected'];
function validateWeightage(goals) { return goals.reduce((sum, g) => sum + (g.weightage || 0), 0) === 100; }
function canManagerEdit(status) { return status === 'submitted'; }
