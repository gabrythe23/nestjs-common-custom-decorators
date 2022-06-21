import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * this create a param decorator for GET the user info set in auth guard
 */
export const User : () => ParameterDecorator= createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.userInfo as UserInfo;
  },
);
