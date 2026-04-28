export function validateLead(data) {
  if (!data.name || !data.email || !data.phone) {
    return { isValid: false };
  }
  return { isValid: true };
}