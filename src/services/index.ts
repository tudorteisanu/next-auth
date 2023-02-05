import { AuthService } from "./auth.service";
import {CategoriesService} from "@/services/categories.service";

export const authService = new AuthService();
export const categoriesService = new CategoriesService();