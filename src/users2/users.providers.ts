import { User } from './entities/user.entity';

export const catsProviders = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  },
];
