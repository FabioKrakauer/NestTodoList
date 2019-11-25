import { Injectable, NestInterceptor, CallHandler, ExecutionContext, HttpException, HttpStatus } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap, catchError } from 'rxjs/operators';
import { ContractInterface } from "src/interface/Contract.interface";

@Injectable()
export class ValidatorInterceptor implements NestInterceptor {
    constructor(private contract: ContractInterface){ }
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const validate: {error, message} = this.contract.validate(context.switchToHttp().getRequest().body);
        if(validate.error == true){
            throw new HttpException("Error: " + validate.message, HttpStatus.BAD_REQUEST);
        }
        return next.handle();
    }
}