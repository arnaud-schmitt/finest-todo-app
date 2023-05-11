export interface Auth {
  email: string | undefined | null;
  password: string | undefined | null;
  authenticated: boolean | undefined | null;
}

const emptyAuth = (): Auth => ({ authenticated: false } as Auth)

export const createAuth = <T extends Partial<Auth>>(initialValues: T): Auth & T => {
    return Object.assign(emptyAuth(), initialValues);
};
