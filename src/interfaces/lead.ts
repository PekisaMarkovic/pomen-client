export interface CreateLead {
  phoneNumber: string;
  note: string;
  firstNameForCertificate: string;
  lastNameForCertificate: string;
  email: string;
  addressOrder: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date | string;
  dateOfDeath: Date | string;
  pricingId: number;
}
