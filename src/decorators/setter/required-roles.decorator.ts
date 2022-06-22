import { SetMetadata } from '@nestjs/common';

export type RolesType = Array<Enumerator | string | number>;

// set the roles needed to use a method
export const RequiredRoles = (...roles: RolesType) => {
  if (!roles) roles = [];
  return SetMetadata('requiredRoles', roles);
};
