import { SetMetadata } from '@nestjs/common';

export type ActionsType = Array<Enumerator | string | number>;

export const RequiredActions = (...actions: ActionsType) => SetMetadata('requiredActions', actions || []);
