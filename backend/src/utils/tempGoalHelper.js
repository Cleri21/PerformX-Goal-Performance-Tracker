// Scratchpad for goal weightage and check-in helpers
const GOAL_STATUSES = ['draft', 'submitted', 'approved', 'rejected'];
function validateWeightage(goals) { return goals.reduce((sum, g) => sum + (g.weightage || 0), 0) === 100; }
