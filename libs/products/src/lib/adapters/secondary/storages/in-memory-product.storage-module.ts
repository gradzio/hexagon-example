import { NgModule } from '@angular/core';
import { InMemoryProductStorage } from './in-memory-product.storage';
import { SELECTS_PRODUCT_CONTEXT_CONTEXT_PORT } from '../../../application/ports/secondary/context/selects-product-context.context-port';
import { SETS_STATE_CONTEXT_PORT } from '../../../application/ports/secondary/context/sets-state.context-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    InMemoryProductStorage,
    {
      provide: SELECTS_PRODUCT_CONTEXT_CONTEXT_PORT,
      useExisting: InMemoryProductStorage,
    },
    { provide: SETS_STATE_CONTEXT_PORT, useExisting: InMemoryProductStorage },
  ],
  exports: [],
})
export class InMemoryProductStorageModule {}
