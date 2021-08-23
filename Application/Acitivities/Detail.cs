using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Acitivities
{
    public class Detail
    {
        public class Query : IRequest<Activities>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Activities>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Activities> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Activities.FindAsync(request.Id);
            }
        }
    }
}