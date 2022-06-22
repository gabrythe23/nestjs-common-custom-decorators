import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User: () => ParameterDecorator = createParamDecorator((data: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});
