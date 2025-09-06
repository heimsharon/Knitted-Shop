import jwtDecode, { JwtPayload } from 'jwt-decode';

interface ExtendedJWT extends JwtPayload {
  data:
  {
    username: string;
    email: string;
    Role: string;
    _id: string;
  };
}

class AuthService {

  getProfile() {
    return jwtDecode<ExtendedJWT>(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  getRole() {
    const token = this.getToken();
    if (!token) return null;
    const decoded = jwtDecode<ExtendedJWT>(token);
    return decoded?.data?.Role || null;
  }

  isTokenExpired(token: string) {
    try {
      const decoded = jwtDeCode<JwtPayload>(token);

      if (decoded?.exp && decoded?.exp * 1000 < Date.now()) {
        return true;
      }

      return false;
    } catch (err) {
      return false;
    }
  }

  getToken(): string {
    const loggedUser = localStorage.getItem('token') || '';
    return loggedUser;
  }

  login(idToken: string) {
    localStorage.setItem('token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('token');
    window.location.assign('/');
  }
}

export default new AuthService();