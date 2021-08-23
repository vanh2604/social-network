using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Acitivities
{
    public class List
    {
        public class Query : IRequest<List<Activities>> {}

        public class Handler : IRequestHandler<Query, List<Activities>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Activities>> Handle(Query query, CancellationToken token)
            {
                return await _context.Activities.ToListAsync();
            }
        }
    }
}