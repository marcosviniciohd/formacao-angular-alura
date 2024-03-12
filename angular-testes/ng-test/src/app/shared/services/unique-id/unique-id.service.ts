import { Injectable } from "@angular/core";
import {v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {

  private numerOfGeneratedIds = 0;

  public generateUniqueIdWithPrefix(prefix: string): string {
    if (!prefix) {
      throw Error('O prefixo não pode ser vazio!');
    }
    const uniqueId = this.generateUniqueId();
    this.numerOfGeneratedIds++;

    return `${prefix}-${uniqueId}`;
  }

  public getNumerOfGeneratedIds(): number {
    return this.numerOfGeneratedIds;
  }

  private generateUniqueId(): string {
    return uuidv4();
  }
}
