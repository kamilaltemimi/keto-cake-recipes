import { NutritionInfo } from "./nutrition-info"

export interface Recipe {
  id?: string,
  title: string | undefined,
  description: string | undefined,
  instruction: string | undefined,
  preparationTimeHours: number | undefined,
  preparationTimeMinutes: number | undefined,
  imageUrl: string | undefined,
  nutritionInfo: NutritionInfo,
  isVegetarian: boolean | undefined,
  isDairyFree: boolean | undefined,
  updateDate?: Date | undefined
}
