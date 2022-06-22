# Nestjs-custom-decorators

A set of nestjs custom decorators.

## Installation

```bash
yarn add nestjs-common-custom-decorators
```

## User decorator

A param decorator that fetches the `request.user` (could be added by a middleware or a guard) and add it to the params.

### Usage:

```ts
 @Get('/user')
 public getUser(@User() user: any): void {
   return user;
 }
```

## Public endpoint declaration

A param decorator that set `isPublic` to true, bypassing the guard

### Usage:

```ts
 @Get('/public-endpoint')
 @Public()
 public publicEndpoint(): void {
   return;
 }
```

## Required User Actions

A param decorator that set the required user action for a selected endpoint. Set to `requiredActions`.

### Usage:

```ts
 @Get('/user-actions')
 @RequiredActions(1,2,3)
 public requiredActions(): void {
   return;
 }
```

## Required User Roles

A param decorator that set the required user roles for a selected endpoint. Set to `requiredRoles`.

### Usage:

```ts
 @Get('/user-roles')
 @RequiredRoles(1,2,3)
 public requiredRoles(): void {
   return;
 }
```
